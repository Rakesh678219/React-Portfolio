import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import LeetcodeCard from './LeetcodeCard'

const GITHUB_REPO =
  'https://api.github.com/repos/liquidslr/leetcode-company-wise-problems/contents/'

type File = {
  name: string
  download_url: string
}

type Folder = {
  name: string
}

export default function LeetcodeExplorer() {
  const [folders, setFolders] = useState<Folder[]>([])
  const [files, setFiles] = useState<File[]>([])
  const [csvData, setCsvData] = useState<any[] | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<string>('')

  useEffect(() => {
    fetch(GITHUB_REPO)
      .then((res) => res.json())
      .then((data) => {
        const companies = data.filter((item: any) => item.type === 'dir')
        setFolders(companies)
        if (companies.length > 0) {
          fetchFiles(companies[0].name)
        }
      })
      .catch((error) => console.error('Error fetching folders:', error))
  }, [])

  const fetchFiles = (company: string) => {
    fetch(GITHUB_REPO + company)
      .then((res) => res.json())
      .then((data) => {
        const csvFiles = data.filter((item: any) => item.name.endsWith('.csv'))
        setFiles(csvFiles)
        setSelectedCompany(company)
        if (csvFiles.length > 0) {
          const lastFile = csvFiles[csvFiles.length - 1]
          setSelectedFile(lastFile.download_url)
          fetchCsvData(lastFile.download_url)
        }
      })
      .catch((error) => console.error('Error fetching files:', error))
  }

  const fetchCsvData = (fileUrl: string) => {
    fetch(fileUrl)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setCsvData(result.data)
          },
        })
      })
      .catch((error) => {
        console.error('Error fetching CSV:', error)
        setCsvData([])
      })
  }

  return (
    <>
      <div style={{ padding: '10px' }} className="p-6">
        <div style={{ marginLeft: '10px', paddingTop: '10px' }}>
          {/* Company Dropdown */}
          <select
            className="custom-dropdown"
            value={selectedCompany}
            onChange={(e) => fetchFiles(e.target.value)}
          >
            <option value="">Select Company</option>
            {folders.map((folder) => (
              <option key={folder.name} value={folder.name}>
                {folder.name}
              </option>
            ))}
          </select>

          {/* File Dropdown */}
          <select
            className="custom-dropdown"
            value={selectedFile}
            onChange={(e) => {
              setSelectedFile(e.target.value)
              fetchCsvData(e.target.value)
            }}
            disabled={!selectedCompany}
          >
            <option value="">Select File</option>
            {files.map((file) => (
              <option key={file.name} value={file.download_url}>
                {file.name}
              </option>
            ))}
          </select>
        </div>

        {/* CSV Data Display */}
        <div style={{ padding: '20px' }}>
          {csvData ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {csvData.map((question, index) => (
                <LeetcodeCard number={index} key={index} question={question} />
              ))}
            </div>
          ) : (
            <p style={{ color: '#fff' }}>Select a file to view problems.</p>
          )}
        </div>
      </div>
    </>
  )
}
