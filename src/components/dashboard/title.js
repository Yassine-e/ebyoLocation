import '../css/dashboard.css';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Title() {
  return (
    <div>
      <div className="Paper1">
          <div className="TitlePaper">
            Dashboard<br/>
            <label className="TitlePaper2">Dashboard/Statistiques Utilisateurs</label>
          </div>
          <BarChartIcon style={{fontSize:'30px'}}/>
      </div>
      <div className="Paper2 row">
          <div className="static col ">
            <label className="staticTitle">Total Annonces</label><br/>
            <label className="staticNbr">255</label><br/>
            <label className="staticTitle2"><ArrowDropUpIcon/>Cette Année</label>
          </div>
          <div className="static col">
            <label className="staticTitle">Total Annonces</label><br/>
            <label className="staticNbr">10</label><br/>
            <label className="staticTitle2"><ArrowDropUpIcon/>Ce Mois</label>
          </div>
          <div className="static col">
            <label className="staticTitle">Total Abonnés</label><br/>
            <label className="staticNbr">1000</label><br/>
            <label className="staticTitle2"><ArrowDropUpIcon/>Depuis 2021</label>
          </div>
          <div className="static col">
            <label className="staticTitle">Total Abonnés</label><br/>
            <label className="staticNbr">1000</label><br/>
            <label className="staticTitle2"><ArrowDropUpIcon/>Depuis 2021</label>
          </div>
      </div>
    </div>
  );
}

export default Title;
