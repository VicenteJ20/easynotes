export const HeaderDashboardCard = ({ title, cant, message, bgColor }) => {
  return (
    <div className='headerDashboardCard' style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
      <h2>{cant}</h2>
      <p>{message}</p>
    </div>
  )
}
