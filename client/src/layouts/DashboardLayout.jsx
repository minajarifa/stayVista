import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sideber/Sidebar";


export default function DashboardLayout() {
    return (
        <div className="relative min-h-screen md:flex">
            {/* Sideber */}
            <Sidebar />
            {/* Outlet -->Dynamic content */}
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}