export const classifyComplaint = (
  text
) => {

  const complaint =
    text.toLowerCase();

  if (
    complaint.includes("pothole") ||
    complaint.includes("road")
  ) {
    return {
      category: "Roads",
      department: "PWD",
      priority: "High",
    };
  }

  if (
    complaint.includes("water") ||
    complaint.includes("pipeline")
  ) {
    return {
      category: "Water Supply",
      department: "Jal Nigam",
      priority: "High",
    };
  }

  if (
    complaint.includes("garbage") ||
    complaint.includes("waste")
  ) {
    return {
      category: "Garbage",
      department: "Municipal Corporation",
      priority: "Medium",
    };
  }

  if (
    complaint.includes("street light") ||
    complaint.includes("electricity")
  ) {
    return {
      category: "Street Light",
      department: "Electric Department",
      priority: "Medium",
    };
  }

  return {
    category: "General",
    department: "Municipality",
    priority: "Low",
  };
};