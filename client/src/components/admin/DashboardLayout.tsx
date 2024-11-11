import { AdminLayout } from "./AdminLayout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppointmentTable } from "./AppointmentTable.tsx";
import { QueryTable } from "./QueryTable.tsx";

export function DashboardLayout() {
  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Tabs defaultValue="appointments">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="queries">Queries</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments">
            <AppointmentTable />
          </TabsContent>
          <TabsContent value="queries">
            <QueryTable />
          </TabsContent>
        </Tabs>
      </motion.div>
    </AdminLayout>
  );
}
