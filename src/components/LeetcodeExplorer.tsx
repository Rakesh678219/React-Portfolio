import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import Papa from 'papaparse'

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
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)

  useEffect(() => {
    fetch(GITHUB_REPO)
      .then((res) => res.json())
      .then((data) => {
        const companies = data.filter((item: any) => item.type === 'dir')
        setFolders(companies)
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
        setCsvData(null)
      })
      .catch((error) => console.error('Error fetching files:', error))
  }

  const fetchCsvData = (file: File) => {
    fetch(file.download_url)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            const filteredData = result.data.map((row: any) => {
              const { 'Acceptance Rate': _, ...rest } = row
              return rest
            })
            setCsvData(filteredData.length > 0 ? filteredData : [])
          },
        })
      })
      .catch((error) => {
        console.error('Error fetching CSV:', error)
        setCsvData([])
      })
  }

  return (
    <div className="flex h-screen p-4 gap-4 bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r overflow-y-auto bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Companies</h2>
        <div className="grid grid-cols-1 gap-2">
          {folders.map((folder) => (
            <Button
              key={folder.name}
              className="w-full text-left shadow-md p-2 rounded-lg hover:bg-gray-200"
              onClick={() => fetchFiles(folder.name)}
            >
              📁 {folder.name}
            </Button>
          ))}
        </div>
      </div>

      {/* File List */}
      <div className="w-1/4 p-4 border-r overflow-y-auto bg-white rounded-lg shadow-md">
        {selectedCompany && (
          <>
            <h2 className="text-xl font-bold mb-4">{selectedCompany}</h2>
            <div className="grid grid-cols-1 gap-2">
              {files.map((file) => (
                <Button
                  key={file.name}
                  className="w-full text-left shadow-md p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => fetchCsvData(file)}
                >
                  📄 {file.name}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CSV Data as Cards */}
      <div className="w-1/2 p-4 overflow-y-auto bg-white rounded-lg shadow-md">
        {csvData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {csvData.map((row, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-2xl cursor-pointer hover:bg-gray-200 transition-transform transform hover:scale-105 border border-gray-200"
                onClick={() => window.open(row.Link, '_blank')}
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {row.Title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Topic: <span className="font-medium">{row.Topics}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Difficulty:{' '}
                  <span className="font-semibold text-indigo-600">
                    {row.Difficulty}
                  </span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Select a file to view problems.
          </p>
        )}
      </div>
    </div>
  )
}
