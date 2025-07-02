/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: "export"
    async rewrites() {
        return [
            {
                source: '/crm',
                destination: '/api/crm'
            },
            {
                source: '/token',
                destination: '/api/token'
            }     
        ];
    } 
};

export default nextConfig;
