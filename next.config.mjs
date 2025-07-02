/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: "export"
    async rewrites() {
        return [
            {
                source: '/crm',
                destination: '/api/crm'
            }     
        ];
    } 
};

export default nextConfig;
