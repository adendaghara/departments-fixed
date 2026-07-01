// API Service - verticalapi.com
const BASE_URL = 'https://verticalapi.com';

// ===== Departments API =====
export const departmentsAPI = {
  
  getAll: async () => {
    const res = await fetch(`${BASE_URL}/departments`);
    if (!res.ok) throw new Error('فشل في جلب الأقسام');
    return res.json();
  },

  create: async (data) => {
    const res = await fetch(`${BASE_URL}/departments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('فشل في إضافة القسم');
    return res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${BASE_URL}/departments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('فشل في تعديل القسم');
    return res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${BASE_URL}/departments/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('فشل في حذف القسم');
    return res.json();
  },
};

export const employeesAPI = {
  getManagers: async () => {
    const res = await fetch(`${BASE_URL}/employees?role=manager`);
    if (!res.ok) throw new Error('فشل في جلب المدراء');
    return res.json();
  },
};

export const mockDepartments = [
  { id: 1, nameAr: 'قسم الموارد البشرية', nameEn: 'Human Resources', manager: 'أحمد محمد', employeeCount: 12, achievement: 75 },
  { id: 2, nameAr: 'قسم المالية', nameEn: 'Finance', manager: 'سارة أحمد', employeeCount: 8, achievement: 50 },
  { id: 3, nameAr: 'قسم تقنية المعلومات', nameEn: 'Information Technology', manager: 'محمد علي', employeeCount: 20, achievement: 90 },
  { id: 4, nameAr: 'قسم التسويق', nameEn: 'Marketing', manager: 'فاطمة خالد', employeeCount: 6, achievement: 30 },
  { id: 5, nameAr: 'قسم المبيعات', nameEn: 'Sales', manager: 'عمر حسن', employeeCount: 15, achievement: 45 },
  { id: 6, nameAr: 'قسم العمليات', nameEn: 'Operations', manager: 'ليلى عبد الله', employeeCount: 18, achievement: 68 },
];
