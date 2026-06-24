export const exportComplaintsCSV =
(
  complaints
) => {

  const headers =
    "Category,Location,Status,Priority\n";

  const rows =
    complaints
      .map(
        (c) =>
          `${c.category},${c.location},${c.status},${c.priority}`
      )
      .join("\n");

  const csv =
    headers + rows;

  const blob =
    new Blob([csv], {
      type: "text/csv",
    });

  const url =
    URL.createObjectURL(blob);

  const a =
    document.createElement("a");

  a.href = url;

  a.download =
    "complaints.csv";

  a.click();
};