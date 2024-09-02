import "../styles/TeamCard.css";

export const TeamCard = ({ team }) => {
  return (
    <div data-aos="fade-left" className="team__card">
      <div className="team__card__avatar">
        <img src={team.avatar} alt={team.name} />
      </div>
      <div className="team__card__content p-4">
        <div className="team__card__content__header gap-x-4">
          <h3>{team.name}</h3>
          <p>{team.role}</p>
        </div>
        <div className="team__card__desc">
          <p>{team.desc}</p>
        </div>
      </div>
    </div>
  );
};
