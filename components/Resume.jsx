function Resume() {
  const downloadResume = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Anila_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <div className="resume-container">
        <p>
          Download my resume to know more about my education,
          skills and projects.
        </p>
        <button
          onClick={() => downloadResume('https://drive.google.com/uc?export=download&id=1h_Ux37RpQo6r11ezRNgJlhbBLhArnN76')}
          className="resume-btn"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}

export default Resume