import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(async function Home() {
  return (
    <div className="bg-slate-100 min-h-screen flex justify-center">
      <section>
        
      </section>
    </div>
  );
}, {returnTo: '/'});
