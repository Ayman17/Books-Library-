import React from "react";

export default function LoadingButton() {
  return (
    <button class="btn btn-outline-info" type="button" disabled>
      <span class="spinner-border spinner-border-sm text-info" aria-hidden="true"></span>
    </button>
  );
}
