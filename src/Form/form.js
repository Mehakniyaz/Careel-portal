import { useState } from "react";
import styles from "./form.module.css"
const JobApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({ fullName, email, phone, resume });
    
    setFullName("");
    setEmail("");
    setPhone("");
    setResume(null);
  };

  return (
    <form onSubmit={handleSubmit}  className={styles.container}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label htmlFor="resume">Resume:</label>
      <input
        type="file"
        id="resume"
        onChange={(e) => setResume(e.target.files[0])}
        accept=".pdf,.doc,.docx"
        required
      />
      <button type="submit" className={styles.btn}>Apply</button>
    </form>
  );
};

export default JobApplicationForm;