import React from 'react';
import { SquarePen, Trash2 } from 'lucide-react';
import { Product } from '@/types';

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

// FIX: Changed default align to 'left' and enforced text-left class
const TableHeaderCell = ({ label, align = "left" }: { label: string; align?: "left" | "right" }) => (
  <th className={`px-6 py-4 text-${align} text-xs font-medium text-gray-600 uppercase tracking-wider`}>
    {label}
  </th>
);

export default function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <TableHeaderCell label="Product" />
              <TableHeaderCell label="Category" />
              <TableHeaderCell label="Price" />
              <TableHeaderCell label="Stock" />
              <TableHeaderCell label="Status" />
              <TableHeaderCell label="Actions" align="right" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0 bg-gray-200" />
                    <div>
                      <p className="text-sm text-gray-800 font-light">{product.name}</p>
                      <p className="text-xs text-gray-500 font-light">ID: {product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4"><span className="text-sm text-gray-700 font-light">{product.category}</span></td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-800 font-light">{product.price}</span>
                    {product.originalPrice && <span className="text-xs text-gray-500 font-light line-through">{product.originalPrice}</span>}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-light ${product.stock < 20 ? 'text-red-600' : 'text-gray-700'}`}>{product.stock} units</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-light bg-green-100 text-green-700">{product.status}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => onEdit(product)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><SquarePen className="w-4 h-4" /></button>
                    <button onClick={() => onDelete(product)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}