import jsPDF from "jspdf";

export const downloadCertificate = (
  citizen
) => {
  const doc = new jsPDF();

  doc.setFontSize(24);

  doc.text(
    "CIVIC ORBIT",
    70,
    30
  );

  doc.setFontSize(20);

  doc.text(
    "Certificate of Civic Excellence",
    25,
    50
  );

  doc.setFontSize(14);

  doc.text(
    `Awarded To: ${citizen.name}`,
    20,
    80
  );

  doc.text(
    `Hero Score: ${citizen.score}`,
    20,
    95
  );

  doc.text(
    `Reports Submitted: ${citizen.reports}`,
    20,
    110
  );

  doc.text(
    "Thank you for making your community better.",
    20,
    140
  );

  doc.save(
    `${citizen.name}-certificate.pdf`
  );
};