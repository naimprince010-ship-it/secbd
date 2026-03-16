"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, Clock, Trash2, User, FileText } from "lucide-react";

export default function MessagesAdmin() {
    const [messages, setMessages] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchMessages = async () => {
        setIsLoading(true);
        const { data, error } = await supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (data && !error) {
            setMessages(data);
        } else if (error) {
            console.error("Error fetching messages:", error.message);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this message?");
        if (!confirmDelete) return;

        const { error } = await supabase
            .from('contact_messages')
            .delete()
            .eq('id', id);

        if (!error) {
            setMessages(messages.filter(msg => msg.id !== id));
        } else {
            alert("Error deleting message: " + error.message);
        }
    };

    if (isLoading) return <div className="p-8 text-center text-navy font-bold text-lg">Loading Messages...</div>;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <h1 className="text-3xl font-black text-navy mb-2">Inbox Messages</h1>
                <p className="text-gray-500 text-sm">View and manage messages sent from your website's contact form.</p>
            </div>

            {messages.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center text-gray-500 font-bold">
                    No messages received yet.
                </div>
            ) : (
                <div className="grid gap-6">
                    {messages.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:shadow-md transition-all">
                            <div className="space-y-4 flex-1">
                                <div className="flex items-center gap-4">
                                    <div className="bg-safety-orange/10 p-2 rounded-xl">
                                        <User className="w-5 h-5 text-safety-orange" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-navy text-lg">{item.full_name}</h3>
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Mail className="w-3 h-3" />
                                            <span>{item.email}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <FileText className="w-4 h-4 text-safety-orange" />
                                    <span>Service: {item.service_type || "N/A"}</span>
                                </div>

                                <p className="text-gray-700 bg-gray-50 p-4 rounded-xl font-medium text-sm leading-relaxed border border-gray-100">
                                    "{item.message}"
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-4">
                                <div className="flex items-center gap-1.5 text-gray-400 text-xs font-bold">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{new Date(item.created_at).toLocaleDateString()}</span>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-3 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all md:opacity-0 md:group-hover:opacity-100"
                                    title="Delete Message"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
