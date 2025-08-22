/**
 * 会社概要
 */
const CompanyProfile = () => (
    <>

        {/* 会社概要 Section */}
        <section className="py-14 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">会社概要</h2>
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">

                {/* PC表示（テーブル形式） */}
                <table className="hidden sm:table w-full text-left border-collapse">
                    <tbody>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold w-40 text-gray-700">社　　名</th>
                            <td className="py-3 px-4">株式会社 立花堂</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700">設　　立</th>
                            <td className="py-3 px-4">2025年 4月 1日</td>
                        </tr>
                        <tr className="">
                            <th className="py-3 px-4 font-semibold text-gray-700">事業内容</th>
                            <td className="py-3 px-4 border-b">アプリケーションの企画、制作、運営</td>
                        </tr>
                        <tr className="">
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4 border-b">ソフトウェアのライセンス販売</td>
                        </tr>
                        <tr className="">
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4 border-b">SaaS事業</td>
                        </tr>
                        <tr className="">
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4 border-b">人材育成、教育研修、講師事業</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700"></th>
                            <td className="py-3 px-4">各種コンサルディング事業</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 font-semibold text-gray-700">本　　社</th>
                            <td className="py-3 px-4">大阪府大阪市北区梅田 1丁目2番2号 大阪駅前第2ビル 12-12</td>
                        </tr>
                        <tr>
                            <th className="py-3 px-4 font-semibold text-gray-700">代　　表</th>
                            <td className="py-3 px-4">代表取締役 社長　立花 秀徳</td>
                        </tr>
                    </tbody>
                </table>

                {/* スマホ表示（縦並びカード形式） */}
                <div className="space-y-6 sm:hidden">
                    <div>
                        <p className="text-gray-500 text-sm">社　　名</p>
                        <p className="font-medium">株式会社 立花堂</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">設　　立</p>
                        <p className="font-medium">2025年 4月 1日</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">事業内容</p>
                        <ul className="font-medium list-disc list-inside space-y-1">
                            <li>アプリケーションの企画、制作、運営</li>
                            <li>ソフトウェアのライセンス販売</li>
                            <li>SaaS事業</li>
                            <li>人材育成、教育研修、講師事業</li>
                            <li>各種コンサルディング事業</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">本　　社</p>
                        <p className="font-medium">大阪府大阪市北区梅田 1丁目2番2号<br />大阪駅前第2ビル 12-12</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">代　　表</p>
                        <p className="font-medium">代表取締役 社長　立花 秀徳</p>
                    </div>
                </div>

            </div>
        </section>

    </>
);

export default CompanyProfile;
