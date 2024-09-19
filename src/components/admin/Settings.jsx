import React, { useState } from 'react';
import { FiUserPlus, FiTrash2, FiEdit, FiSave } from 'react-icons/fi';
import { MdSettings, MdPerson, MdSchool,MdSupervisorAccount } from 'react-icons/md';

function SettingsComponent() {
  const [activeTab, setActiveTab] = useState('students');

  const [students, setStudents] = useState([{ name: '', email: '', id: '' }]);
  const [teachers, setTeachers] = useState([{ name: '', isPermanent: true, username: '', password: '' }]);
  const [adminSettings, setAdminSettings] = useState({ email: '', password: '' });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleStudentChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const handleTeacherChange = (index, field, value) => {
    const updatedTeachers = [...teachers];
    updatedTeachers[index][field] = value;
    setTeachers(updatedTeachers);
  };

  const handleAdminChange = (field, value) => {
    setAdminSettings({ ...adminSettings, [field]: value });
  };

  const addStudent = () => setStudents([...students, { name: '', email: '', id: '' }]);
  const addTeacher = () => setTeachers([...teachers, { name: '', isPermanent: true, username: '', password: '' }]);

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-zinc-800 text-white py-4 border-b-4 border-pur shadow-lg rounded-lg w-[50%] ml-[20%] mt-[5%] ">
        <div className="flex justify-center">
          <div className="flex space-x-4   ">
            <a onClick={() => handleTabClick('students')} className="cursor-pointer flex active:border-b active:border-pur items-center space-x-2">
              < MdSupervisorAccount className= {`${activeTab === 'students' ? 'text-xl'  : 'text-zinc-400'}`} />
              <span className={`${activeTab === 'students' ? 'font-bold '  : ' text-zinc-400'}`}>Manage Students</span>
            </a>
            <a onClick={() => handleTabClick('teachers')} className="active:border-b active:border-pur cursor-pointer flex items-center space-x-2">
              <MdSchool className={`${activeTab === 'teachers' ? 'text-xl'  : ' text-zinc-400'}`} />
              <span className={`${activeTab === 'teachers' ? 'font-bold '  : ' text-zinc-400'}`}>Manage Teachers</span>
            </a>
            <a onClick={() => handleTabClick('adminSettings')} className="active:border-b active:border-pur cursor-pointer flex items-center space-x-2">
              <MdSettings className={`${activeTab === 'adminSettings' ? 'text-xl '  : ' text-zinc-400600'}`} />
              <span className={`${activeTab === 'adminSettings' ? 'font-bold '  : ' text-zinc-400'}`}>Admin Settings</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-600 p-8 rounded-lg shadow-md">
          {/* Student Management Section */}
          {activeTab === 'students' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Students</h2>
              {students.map((student, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleStudentChange(index, 'name', e.target.value)}
                    placeholder="Student Name"
                    className="p-2 border border-primary bg-primary focus:outline-primary rounded-md shadow-sm"
                  />
                  <input
                    type="email"
                    value={student.email}
                    onChange={(e) => handleStudentChange(index, 'email', e.target.value)}
                    placeholder="Student Email"
                    className="p-2 border border-primary bg-primary focus:outline-primary rounded-md shadow-sm"
                  />
                  <input
                    type="text"
                    value={student.id}
                    onChange={(e) => handleStudentChange(index, 'id', e.target.value)}
                    placeholder="Student ID"
                    className="p-2 border border-primary bg-primary rounded-md focus:outline-primary shadow-sm"
                  />
                  <button
                    className="p-2 bg-pur rounded-md hover:bg-purple-800 hover:border-b-4 hover:border-pur"
                    title="Delete Student"
                    onClick={() => setStudents(students.filter((_, i) => i !== index))}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
              <button
                className="py-2 px-4 bg-primary rounded-md hover:bg-Dpur  hover:border-b-4 hover:border-pur flex items-center"
                onClick={addStudent}
              >
                <FiUserPlus className="mr-2" /> Add New Student
              </button>
            </div>
          )}

          {/* Teacher Management Section */}
          {activeTab === 'teachers' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Manage Teachers</h2>
              {teachers.map((teacher, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <input
                    type="text"
                    value={teacher.name}
                    onChange={(e) => handleTeacherChange(index, 'name', e.target.value)}
                    placeholder="Teacher Name"
                    className="p-2 border border-primary bg-primary focus:outline-primary  rounded-md shadow-sm"
                  />
                  <select
                    value={teacher.isPermanent ? 'Permanent' : 'Visitor'}
                    onChange={(e) => handleTeacherChange(index, 'isPermanent', e.target.value === 'Permanent')}
                    className="p-2 border bg-zinc-800 border-primary  focus:outline-primary  rounded-md shadow-sm"
                  >
                    <option value="Permanent">Permanent</option>
                    <option value="Visitor">Visitor</option>
                  </select>
                  <input
                    type="email"
                    value={teacher.username}
                    onChange={(e) => handleTeacherChange(index, 'username', e.target.value)}
                    placeholder="email"
                    className="p-2 border border-primary focus:outline-primary bg-primary  rounded-md shadow-sm"
                  />
                  <input
                    type="password"
                    value={teacher.password}
                    onChange={(e) => handleTeacherChange(index, 'password', e.target.value)}
                    placeholder="Password"
                    className="p-2 border border-primary bg-primary focus:outline-primary rounded-md shadow-sm"
                  />
                  <button
                    className="p-2 bg-pur text-white rounded-md hover:bg-purple-800"
                    title="Delete Teacher"
                    onClick={() => setTeachers(teachers.filter((_, i) => i !== index))}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
              <button
                className="py-2 px-4 bg-primary rounded-md hover:border-b-4 hover:border-Dpur hover:bg-pur flex items-center"
                onClick={addTeacher}
              >
                <FiUserPlus className="mr-2" /> Add New Teacher
              </button>
            </div>
          )}

          {/* Admin Settings Section */}
          {activeTab === 'adminSettings' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Admin Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  value={adminSettings.email}
                  onChange={(e) => handleAdminChange('email', e.target.value)}
                  placeholder="Admin Email"
                  className="p-2 border border-primary bg-primary focus:outline-none  rounded-md shadow-sm"
                />
                <input
                  type="password"
                  value={adminSettings.password}
                  onChange={(e) => handleAdminChange('password', e.target.value)}
                  placeholder="Admin Password"
                  className="p-2 border border-primary bg-primary focus:outline-none rounded-md shadow-sm"
                />
              </div>
              <button
                className="py-2 px-4 bg-pur rounded-md hover:bg-Dpur hover:border-b-4 hover:border-pur flex items-center"
                onClick={() => console.log(adminSettings)}
              >
                <FiSave className="mr-2" /> Save Admin Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsComponent;
