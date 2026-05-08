'use client'
import { cn } from '@/components/ui';
import { MOCK_PATIENTS } from '@/lib/data';
import { Patient } from '@/lib/types';
import { Button, Input, Card, CardHeader, CardTitle, CardContent, Badge, Modal, Avatar } from '@/components/ui';
import { Lucide } from 'lucide-react';

const PatientDetailModal = ({ patient }: { patient: Patient }) => {
  return (
    <Modal>
      <Modal.Header>
        <CardTitle>{patient.name}</CardTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Avatar src={patient.avatar} />
            <div>
              <span className="text-zinc-900">{patient.name}</span>
              <span className="text-zinc-600">{patient.email}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-900">Date of Birth: {patient.dateOfBirth}</span>
            <span className="text-zinc-900">Medical History: {patient.medicalHistory}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="bg-white border border-zinc-200 rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle>Patients</CardTitle>
          <Button variant="primary">New Patient</Button>
        </CardHeader>
        <CardContent>
          <table className="w-full table-auto">
            <thead className="bg-zinc-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Date of Birth</th>
                <th className="px-4 py-2">Medical History</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_PATIENTS.map((patient) => (
                <tr key={patient.id} className="hover:bg-zinc-100">
                  <td className="px-4 py-2">{patient.name}</td>
                  <td className="px-4 py-2">{patient.email}</td>
                  <td className="px-4 py-2">{patient.dateOfBirth}</td>
                  <td className="px-4 py-2">{patient.medicalHistory}</td>
                  <td className="px-4 py-2">
                    <Badge variant="success" size="sm">
                      {patient.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="outline" size="sm" onClick={() => console.log('Open patient details')}>
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}