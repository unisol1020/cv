interface TestimonialAuthorProps {
  name: string;
  title: string;
}

export function TestimonialAuthor({ name, title }: TestimonialAuthorProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-neutral-400">{title}</p>
    </div>
  );
}
