import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const inventoryData = [
  { item: "Tomatoes", stock: 25, minLevel: 10 },
  { item: "Basmati Rice", stock: 60, minLevel: 20 },
  { item: "Cooking Oil", stock: 12, minLevel: 5 },
  { item: "Chicken Breast", stock: 30, minLevel: 15 },
  { item: "Soft Drinks", stock: 110, minLevel: 50 },
];

const wastageData = [
  { date: "2025-06-10", item: "Tomatoes", qty: 2 },
  { date: "2025-06-11", item: "Chicken Breast", qty: 1.5 },
];

export default function KitchenInventoryDashboard() {
  return (
    <div className="grid gap-6 p-4">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Current Inventory Levels</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={inventoryData}>
              <XAxis dataKey="item" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#4F46E5" name="Current Stock" />
              <Bar dataKey="minLevel" fill="#E5E7EB" name="Minimum Level" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Inventory Table</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Current Stock</TableCell>
                <TableCell>Minimum Level</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.item}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.minLevel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Wastage Log</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Quantity Wasted</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wastageData.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.item}</TableCell>
                  <TableCell>{entry.qty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
