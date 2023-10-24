export default function Page({ params }: { params: { slug: string } }) {
  return <div className="text-white">Building A Ray Caster in C: {params.slug}</div>
}