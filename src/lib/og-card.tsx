export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#f1eec0",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
        <span style={{ color: "#3aa1d8" }}>mö</span>
        <span>mustafaozturk.kim</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          lineHeight: 0.95,
        }}
      >
        <span>building software</span>
        <span>
          is the <span style={{ color: "#3aa1d8" }}>job.</span>
        </span>
      </div>
      <div style={{ display: "flex", fontSize: 32 }}>
        <span style={{ color: "#ea4530" }}>Mustafa Öztürk</span>
        <span style={{ marginLeft: 16, opacity: 0.7 }}>· Istanbul</span>
      </div>
    </div>
  );
}
