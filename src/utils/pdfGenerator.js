import jsPDF from "jspdf";

export const downloadComplaintPDF = (
  complaint
) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(
    "CIVIC ORBIT Complaint Report",
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    `Category: ${complaint.category}`,
    20,
    40
  );

  doc.text(
    `Description: ${complaint.description}`,
    20,
    50
  );

  doc.text(
    `Location: ${complaint.location}`,
    20,
    60
  );

  doc.text(
    `Status: ${complaint.status}`,
    20,
    70
  );

  doc.text(
    `Priority: ${complaint.priority}`,
    20,
    80
  );

  doc.text(
    `Votes: ${complaint.upvotes || 0}`,
    20,
    90
  );

  doc.save(
    `${complaint.category}-report.pdf`
  );
};