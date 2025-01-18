import {FC} from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Home } from '../pages/Home';
import { Improve } from '../pages/Improve';
import { PageNotFound } from '../pages/PageNotFound';
import { Rewards } from '../pages/Rewards';
import { Quests } from '../pages/Quests';
import { Friends } from '../pages/Friends';
import { AppLayout } from '../shared/ui';

export const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="improve" element={<Improve />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="quests" element={<Quests />} />
          <Route path="friends" element={<Friends />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
