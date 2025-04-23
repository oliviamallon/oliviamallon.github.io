
const Contact = () => {
  return (
    <div className="px-6 py-12 text-white max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-6">Contact</h2>
      <p className="text-lg text-center mb-12">Feel free to reach out to me through the contact details below.</p>
      
      {/* Contact Card */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img
            src="../images/profile-photo.jpg"
            alt="Your Name"
            className="rounded-full w-32 h-32 object-cover"
          />
        </div>

        {/* Name */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-semibold">Olivia Mallon</h3>
          <p className="text-sm text-gray-400">Software Enginner @ EverQuote</p>
        </div>

        {/* Email */}
        <div className="text-center mb-4">
          <p className="text-lg">Email: <a href="mailto:olivia24.mallon@gmail.com" className="text-blue-400">olivia24.mallon@gmail.com</a></p>
        </div>

        {/* LinkedIn */}
        <div className="text-center mb-4">
          <p className="text-lg">LinkedIn: 
            <a 
              href="https://www.linkedin.com/in/olivia-mallon-5812261b4/" 
              className="text-blue-400" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               https://www.linkedin.com/in/olivia-mallon-5812261b4/
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
