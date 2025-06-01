export default function Resume() {
  return (
    <div>
      <h3>Have a look at my Resume</h3>
      <iframe
        src="/Portfolio/Resume_SWE.pdf"
        width="85%"
        height="1200"
        title="Resume PDF"
        onError={(e) => console.log('Iframe error:', e)}
        style={{border:"none"}}
      />
    </div>
  );
}