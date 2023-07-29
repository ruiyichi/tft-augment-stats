import { Request, Response } from "express";
import Augment from "../model/Augment";
import axios from "../axios";
import Summoner from "../model/Summoner";
import { isAxiosError } from "axios";

export const getAugments = async (req: Request, res: Response) => {
  const augments = await Augment.find({}).exec();
  res.json({ augments });
}

export const refreshAugments = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`/league/v1/challenger?api_key=${process.env.API_KEY}`);
    const data = response.data;
    const entries = data.entries;
    const summonerIds = entries.map((entry: { summonerId: string }) => entry.summonerId);
    const puuids = [];

    const summoners = await Summoner.find({}).exec();

    for (const id of summonerIds) {
      const existingSummoner = summoners.find(s => s.summonerId === id);
      if (existingSummoner) {
        puuids.push(existingSummoner.puuid);
      } else {
        try {
          const res = await axios.get(`/summoner/v1/summoners/${id}?api_key=${process.env.API_KEY}`);
          console.log(res.data.puuid);
          await Summoner.create({ summonerId: id, puuid: res.data.puuid })
          puuids.push(res.data.puuid);
        } catch (err) {
          console.log(err);
          break;
        }
      }
    }

    for (const puuid of puuids) {
      
    }

    console.log(puuids)

  } catch (err: unknown) {
    if (isAxiosError(err)) {
      console.log(err.status);
    }
    res.status(404);
  }
}