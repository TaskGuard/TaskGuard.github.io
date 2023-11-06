import { Route, Routes } from "react-router-dom";

import { Layout } from "./common/components/layout";
import { HowToDistributeYourApps } from "./domains/blog/articles/howtoDistributeYourApps";
import { BlogPage } from "./domains/blog/blogPage";
import { DownloadPage } from "./domains/download/donwloadPage";
import { NotFoundPage } from "./domains/errorPages/notFoundPage";
import { FeaturesPage } from "./domains/features/featuresPage";
import { Homepage } from "./domains/homepage/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/how-to-distribute-your-apps" element={<HowToDistributeYourApps />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
