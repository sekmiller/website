/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { renderRankingComponent } from "../js/ranking/component";
import { DatacommonsBarComponent } from "./bar_component";
import {
  renderBarComponent,
  renderLineComponent,
  renderMapComponent,
} from "./components";
import { DEFAULT_API_ENDPOINT } from "./constants";
import { DatacommonsGaugeComponent } from "./gauge_component";
import { DatacommonsHighlightComponent } from "./highlight_component";
import { DatacommonsLineComponent } from "./line_chart_component";
import { DatacommonsMapComponent } from "./map_component";
import { DatacommonsPieComponent } from "./pie_component";
import { DatacommonsRankingComponent } from "./ranking_component";
import { DatacommonsScatterComponent } from "./scatter_component";
import { DatacommonsSliderComponent } from "./slider_component";
import { DatacommonsTextComponent } from "./text_component";

globalThis.datacommons = {
  DatacommonsBarComponent,
  DatacommonsGaugeComponent,
  DatacommonsHighlightComponent,
  DatacommonsLineComponent,
  DatacommonsMapComponent,
  DatacommonsPieComponent,
  DatacommonsRankingComponent,
  DatacommonsScatterComponent,
  DatacommonsSliderComponent,
  DatacommonsTextComponent,
  drawBar: renderBarComponent,
  drawLine: renderLineComponent,
  drawMap: renderMapComponent,
  drawRanking: renderRankingComponent,
  root: DEFAULT_API_ENDPOINT,
};
