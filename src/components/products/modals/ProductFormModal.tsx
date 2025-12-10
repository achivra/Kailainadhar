import React, { useState } from 'react';
import { X, Upload, SquarePen } from 'lucide-react';
import { Product } from '@/types';
import Dropdown from '@/components/ui/Dropdown'; // Using global dropdown

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: Partial<Product>) => void;
  initialData?: Product | null;
}

const DEFAULT_FORM_DATA: Partial<Product> = {
  name: '', category: '', stock: 0, originalPrice: '', price: '', description: '', benefits: '', ingredients: '', image: '/api/placeholder/400/400'
};

const CATEGORIES = ['Herbal Oils', 'Powders', 'Medicines', 'Wellness'];

export default function ProductFormModal({ isOpen, onClose, onSubmit, initialData }: ProductFormModalProps) {
  const [formData, setFormData] = useState<Partial<Product>>(initialData || DEFAULT_FORM_DATA);
  if (!isOpen) return null;
  const isEditMode = !!initialData;

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSubmit(formData); onClose(); };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl text-gray-800 font-['Poppins',sans-serif] font-semibold">{isEditMode ? 'Edit Product' : 'Add New Product'}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="w-6 h-6" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><label className="block text-sm text-gray-700 mb-2 font-['Poppins',sans-serif]">Product Name</label><input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32] font-['Poppins',sans-serif] font-light" placeholder="Enter product name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
          {/* Image Upload Omitted for brevity, assumed same as before */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-['Poppins',sans-serif]">Category</label>
              {/* FIX: Using Global Dropdown */}
              <Dropdown value={formData.category || ''} onChange={(val) => setFormData({...formData, category: val})} options={CATEGORIES} placeholder="Select category" />
            </div>
            <div><label className="block text-sm text-gray-700 mb-2 font-['Poppins',sans-serif]">Stock Quantity</label><input type="number" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32] font-['Poppins',sans-serif] font-light" placeholder="0" value={formData.stock} onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value) || 0})} /></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm text-gray-700 mb-2 font-['Poppins',sans-serif]">Original Price (₹)</label><input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32] font-['Poppins',sans-serif] font-light" placeholder="0.00" value={formData.originalPrice} onChange={(e) => setFormData({...formData, originalPrice: e.target.value})} /></div>
            <div><label className="block text-sm text-gray-700 mb-2 font-['Poppins',sans-serif]">Offer Price (₹) *</label><input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32] font-['Poppins',sans-serif] font-light" placeholder="0.00" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} /></div>
          </div>
          <div><label className="block text-sm text-gray-700 mb-2 font-['Poppins',sans-serif]">Description</label><textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d32] font-['Poppins',sans-serif] font-light resize-none" placeholder="Enter product description..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} /></div>
          <div className="flex gap-3 pt-4"><button type="button" onClick={onClose} className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-light">Cancel</button><button type="submit" className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2e7d32] to-[#66bb6a] text-white rounded-xl hover:shadow-lg transition-all font-medium">{isEditMode ? 'Update Product' : 'Add Product'}</button></div>
        </form>
      </div>
    </div>
  );
}