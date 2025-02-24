import React from 'react'

export const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="min-w-full border">{children}</table>
)

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-200">{children}</thead>
)

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b">{children}</tr>
)

export const TableHead = ({ children }: { children: React.ReactNode }) => (
  <th className="p-2 text-left">{children}</th>
)

export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
)

export const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="p-2 border">{children}</td>
)
