import React from "react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({
  isOpen,
  onClose,
  onAgree,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal container with animation */}
      <div className="bg-white rounded-2xl shadow-xl w-11/12 max-w-md p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          Terms & Conditions
        </h2>

        {/* Scrollable terms */}
        <div className="max-h-60 overflow-y-auto pr-2 text-gray-700 text-sm leading-relaxed space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              You must not be a cop or federal agent. Only genuine clients are
              welcome.
            </li>
            <li>No molestation or sexual abuse is tolerated.</li>
            <li>Anything goes for the hours employed.</li>
            <li>
              A pre-payment is required: at least half upfront to secure your
              meeting.
            </li>
            <li>
              Straight to business — no jokes, pranks, or time-wasting.
            </li>
            <li>
              Reservations are mandatory for first timers meetings to ensure
              smooth arrangements.
            </li>
          </ol>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={onAgree}
            className="px-4 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition w-full sm:w-auto"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;