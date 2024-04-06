import React from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'

function ZoomVerificationStatus() {
  const searchParams = new URLSearchParams(useLocation().search);
  const status = searchParams.get("status");
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/")
  }, 4000);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80%", // Use full viewport height
      }}
    >
      {status === "true" ? (
        <div>
            <CheckCircle style={{ color: "green", fontSize: 80 }} />
        </div>
      ) : (
        <div>
            <Cancel style={{ color: "red", fontSize: 80 }} />
        </div>
      )}
    </div>
  );
}

export default ZoomVerificationStatus;
