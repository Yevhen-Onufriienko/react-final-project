// const breadcrumbs = [
//   {
//     to: "/",
//     label: "Main Page",
//     isActive: false,
//   },
//   {
//     to: "/categories",
//     label: "Categories",
//     isActive: false,
//   },
//   {
//     to: "/categories/3",
//     label: "Dry & Wet Food",
//     isActive: false,
//   },
//   {
//     to: "/products/7",
//     label: "Royal Canin",
//     isActive: true,
//   },
// ];

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.to}
            className={`breadcrumb-item ${breadcrumb.isActive ? "active" : ""}`}
            aria-current={breadcrumb.isActive ? "page" : undefined}
          >
            {breadcrumb.isActive ? (
              breadcrumb.label
            ) : (
              <a href={breadcrumb.to}>{breadcrumb.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

