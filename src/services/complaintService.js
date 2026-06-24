const STORAGE_KEY = "civic_orbit_complaints";

export const getComplaints = () => {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ) || [];
};

export const saveComplaint = (complaint) => {
  const complaints = getComplaints();

  complaints.push(complaint);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(complaints)
  );
};

export const updateComplaints = (
  complaints
) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(complaints)
  );
};