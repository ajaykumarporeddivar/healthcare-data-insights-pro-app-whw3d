'use client'
import { useParams } from 'next'
import { cn } from '@/components/ui';
import { MOCK_PATIENTS, MOCK_DOCTORS, MOCK_APPOINTMENTS from '@/lib/data';
import { Patient, Doctor, Appointment from '@/lib/types';
import { Button, Input, Card, CardHeader, CardTitle, CardContent, Badge, Modal, Avatar } from '@/components/ui';
import { Lucide } from 'lucide-react';

const params = useParams()
const slug = (params.feature as string) ?? ''

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

const AppointmentDetailModal = ({ appointment }: { appointment: Appointment }) => {
  return (
    <Modal>
      <Modal.Header>
        <CardTitle>Appointment Details</CardTitle>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span className="text-zinc-900">Patient: {appointment.patientId}</span>
            <span className="text-zinc-900">Doctor: {appointment.doctorId}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-900">Date: {appointment.date}</span>
            <span className="text-zinc-900">Time: {appointment.time}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

const featureViews: { [key: string]: React.ReactNode } = {
  patients: (
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
  ),
  doctors: (
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
  ),
  appointments: (
    <div className="flex flex-col gap-4">
      <Card className="bg-white border border-zinc-200 rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle>Appointments</CardTitle>
          <Button variant="primary">New Appointment</Button>
        </CardHeader>
        <CardContent>
          <table className="w-full table-auto">
            <thead className="bg-zinc-200">
              <tr>
                <th className="px-4 py-2">Patient</th>
                <th className="px-4 py-2">Doctor</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_APPOINTMENTS.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-zinc-100">
                  <td className="px-4 py-2">{appointment.patientId}</td>
                  <td className="px-4 py-2">{appointment.doctorId}</td>
                  <td className="px-4 py-2">{appointment.date}</td>
                  <td className="px-4 py-2">{appointment.time}</td>
                  <td className="px-4 py-2">
                    <Badge variant="success" size="sm">
                      {appointment.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">
                    <Button variant="outline" size="sm" onClick={() => console.log('Open appointment details')}>
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
  ),
}

const featureIndex = (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card className="bg-white border border-zinc-200 rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle>Patients</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-600">View and manage patient information</p>
        <Button variant="primary" size="lg" href="/dashboard/patients">
          Open →
        </Button>
      </CardContent>
    </Card>
    <Card className="bg-white border border-zinc-200 rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle>Doctors</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-600">View and manage doctor information</p>
        <Button variant="primary" size="lg" href="/dashboard/doctors">
          Open →
        </Button>
      </CardContent>
    </Card>
    <Card className="bg-white border border-zinc-200 rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-600">View and manage appointment information</p>
        <Button variant="primary" size="lg" href="/dashboard/appointments">
          Open →
        </Button>
      </CardContent>
    </Card>
  </div>
)

return (
  <div className="flex flex-col gap-4">
    {slug ? featureViews[slug] ?? featureIndex : featureIndex}
  </div>
)
export default {}