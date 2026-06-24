import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const complaintRef =
  collection(db, "complaints");

// Save Complaint
export const saveComplaintFirestore =
  async (complaint) => {

    return await addDoc(
      complaintRef,
      {
        ...complaint,

        status: "Reported",
        progress: 0,

        citizenSatisfaction: 0,
        contractorRating: 0,
        feedbackText: "",
        feedbackSubmitted: false,

        donationEnabled: false,
        totalDonated: 0,
        amountUsed: 0,
        donors: [],
        expenseHistory: [],
      }
    );
  };

// Get All Complaints
export const getComplaintsFirestore =
  async () => {

    const snapshot =
      await getDocs(
        complaintRef
      );

    return snapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );
  };

// Update Complaint
export const updateComplaintFirestore =
  async (id, data) => {

    const docRef =
      doc(
        db,
        "complaints",
        id
      );

    await updateDoc(
      docRef,
      data
    );
  };

// Realtime Listener
export const subscribeComplaints =
  (callback) => {

    return onSnapshot(
      complaintRef,
      (snapshot) => {

        const data =
          snapshot.docs.map(
            (doc) => ({
              id: doc.id,
              ...doc.data(),
            })
          );

        callback(data);
      }
    );
  };