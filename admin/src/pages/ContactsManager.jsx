import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEnvelope } from "react-icons/fa";

const ContactsManager = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/contacts`);
        setContacts(res.data.contacts || []);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaEnvelope className="text-[#00d2ff]" />
        Contact Form Submissions
      </h1>

      {loading ? (
        <p className="text-gray-600">Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-600">No contact messages found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-[#00d2ff] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Message</th>
                <th className="py-3 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{contact.name}</td>
                  <td className="py-3 px-4">{contact.email}</td>
                  <td className="py-3 px-4">{contact.message}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactsManager;
