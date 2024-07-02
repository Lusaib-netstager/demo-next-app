/**
 * @author Lusaib Latheef
 * @description Main footer component for the application.
 * @since 02-07-2024
 */
export default function MainFooter() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}
