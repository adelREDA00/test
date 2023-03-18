import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Featuredinfo = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Revanue</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$2,415</span>
        <span className="featuredMoneyRate">
          -11.4 <ArrowDownwardIcon  className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$4,415</span>
        <span className="featuredMoneyRate">
          -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <mark>Malheureusement, nous avons actuellement des problèmes avec le backend de l'application en raison d'un changement de la politique d'hébergement de Heroku pour les plans gratuits. Nous sommes désolés pour les désagréments que cela peut causer à nos utilisateurs. Nous travaillons actuellement à résoudre le problème et à remettre le backend en ligne le plus rapidement possible.</mark>
      </div>
      
    </div>

  </div>
  )
}

export default Featuredinfo