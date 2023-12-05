interface Image {
  src: string;
  alt: string;
}

interface ArticlePreviewProps {
  title: string;
  description: string;
  img?: Image;
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure className="h-64">
        {props.img !== undefined && (
          <img src={props.img?.src} alt={props.img?.alt} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read</button>
        </div>
      </div>
    </div>
  );
};
