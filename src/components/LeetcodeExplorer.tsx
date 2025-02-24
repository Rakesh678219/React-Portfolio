import React, { useState, useEffect } from 'react'
// import { Card } from '@/components/ui/card'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table'
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
  const [selectedFile, setSelectedFile] = useState<string | null>(null)

  useEffect(() => {
    fetch(GITHUB_REPO)
      .then((res) => res.json())
      .then((data) => {
        const companies = data.filter((item: any) => item.type === 'dir')
        setFolders(companies)
      })
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
  }

  const fetchCsvData = (file: File) => {
    fetch(file.download_url)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => setCsvData(result.data),
        })
      })
    setSelectedFile(file.name)
  }

  return (
    <div className="flex h-screen p-4 gap-4">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r overflow-y-auto bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Companies</h2>
        <div className="grid grid-cols-1 gap-2">
          {folders.map((folder) => (
            <Button
              key={folder.name}
              className="w-full text-left bg-[#0000001a] shadow-md p-2 rounded-lg hover:bg-gray-200 flex items-center"
              onClick={() => fetchFiles(folder.name)}
            >
              <span className="text-4xl mr-2">📁</span> {folder.name}
            </Button>
          ))}
        </div>
      </div>

      {/* File List */}
      <div className="w-1/4 p-4 border-r overflow-y-auto bg-gray-100 rounded-lg">
        {selectedCompany && (
          <>
            <h2 className="text-xl font-bold mb-4">{selectedCompany}</h2>
            <div className="grid grid-cols-1 gap-2">
              {files.map((file) => (
                <Button
                  key={file.name}
                  className="w-full text-left bg-[#0000001a] shadow-md p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => fetchCsvData(file)}
                >
                  📄 {file.name}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CSV Data Table */}
      <div className="w-1/2 p-4 overflow-y-auto bg-gray-100 rounded-lg">
        {csvData ? (
          <>
            <h2 className="text-xl font-bold mb-4">{selectedFile}</h2>
            <div className="overflow-x-auto">
              <Table className="w-full border-collapse border border-gray-300">
                <TableHeader>
                  <TableRow className="bg-gray-200">
                    {csvData.length > 0 &&
                      Object.keys(csvData[0]).map((key) => (
                        <TableHead
                          key={key}
                          className="border border-gray-300 p-2 text-left font-semibold"
                        >
                          {key}
                        </TableHead>
                      ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {csvData.map((row, index) => (
                    <TableRow
                      key={index}
                      className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
                    >
                      {Object.values(row).map((value, i) => (
                        <TableCell
                          key={i}
                          className="border border-gray-300 p-2"
                        >
                          {value}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600">
            Select a file to view data.
          </p>
        )}
      </div>
    </div>
  )
}
