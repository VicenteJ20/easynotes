
export const FeatureCard = ({ icon, title, description }) => {
  const iconUrl = String(new URL(`../assets/icons/${icon}`, import.meta.url).href)

  return (
    <div className='FeatureCard'>
      <header>
        <img src={iconUrl} alt={icon} />
      </header>
      <div className='FeatureTitle'>
        <h3>{title}</h3>
      </div>
      <div className='FeatureDescription'>
        <p>{description}</p>
      </div>
    </div>
  )
}
