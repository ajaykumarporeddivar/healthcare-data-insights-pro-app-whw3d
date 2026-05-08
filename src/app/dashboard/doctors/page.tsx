'use client'
import { cn } from '@/components/ui';
import { MOCK_DOCTORS } from '@/lib/data';
import { Doctor } from '@/lib/types';
import { Button, Input, Card, CardHeader, CardTitle, CardContent, Badge, Modal, Avatar } from '@/components/ui';
import { Lucide } from 'lucide-react';

const DoctorDetailModal = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Modal>
      <Modal.Header>
        <CardTitle>{doctor.name}</CardTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Avatar src={doctor.avatar} />
            <div>
              <span className="text-zinc-900">{doctor.name}</span>
              <span className="text-zinc-600">{doctor.email}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-900">Specialty: {doctor.specialty}</span>
            <span className="text-zinc-900">Experience: {doctor.experience} years</span>
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
          <CardTitle>Doctors</CardTitle>
          <Button variant="primary">New Doctor</Button>
        </CardHeader>
        <CardContent>
          <table className="w-full table-auto">
            <thead className="bg-zinc-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Specialty</th>
                <th className="px-4 py-2">Experience</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DOCTORS.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-zinc-100">
                  <td className="px-4 py-2">{doctor.name}</td>
                  <td className="px-4 py-2">{doctor.email}</td>
                  <td className="px-4 py-2">{doctor.specialty}</td>
                  <td className="px-4 py-2">{doctor.experience}</td>
                  <td className="px-4 py-2">
                    <Badge variant="success" size="sm">
                      {doctor.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="outline" size="sm" onClick={() => console.log('Open doctor details')}>
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