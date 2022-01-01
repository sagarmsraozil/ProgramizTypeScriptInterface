// Payload for creating certificate
export interface CertificationCreationPayloadInterface {
  certificateType: number;
  certificateTypeId: number;
}

// Certificates
export interface CertificateInterface {
  id: string;
  title: string;
  createdAt: string;
}

// Download or get certificate
export interface CertificateDownlaodInterface {
  certificateId: number;
}
