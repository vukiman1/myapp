"use client";

/**
 * Theme Demo Component - Showcasing all custom theme classes
 * This component demonstrates the usage of CSS Variables + Custom Classes approach
 * Remove this component in production
 */
export const ThemeDemo = () => {
  return (
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-primary">Theme Classes Demo</h3>

      {/* Text Classes */}
      <div className="space-y-2">
        <h4 className="font-semibold text-primary">Text Classes:</h4>
        <p className="text-primary">Primary text (--foreground)</p>
        <p className="text-secondary">Secondary text (--text-secondary)</p>
        <p className="text-tertiary">Tertiary text (--text-tertiary)</p>
        <p className="text-icon">Icon color (--icon-color)</p>
        <a href="#" className="text-link">
          Link color with hover
        </a>
      </div>

      {/* Background Classes */}
      <div className="space-y-2">
        <h4 className="font-semibold text-primary">Background Classes:</h4>
        <div className="bg-card p-4 rounded border-theme">
          Card background (--card-bg)
        </div>
        <div className="bg-input p-4 rounded border-input">
          Input background (--input-bg)
        </div>
      </div>

      {/* Form Elements */}
      <div className="space-y-2">
        <h4 className="font-semibold text-primary">Form Elements:</h4>
        <input
          type="text"
          placeholder="Form input example"
          className="form-input rounded px-3 py-2 w-full max-w-xs"
        />
        <button className="btn-social px-4 py-2 rounded border">
          Social button
        </button>
      </div>

      {/* Divider */}
      <hr className="divider-theme" />

      {/* Shadow */}
      <div className="shadow-theme bg-card p-4 rounded">
        Element with theme shadow
      </div>
    </div>
  );
};
