import { Computer } from "./requirements/Computer.ts";
import { Server } from "./requirements/Server.ts";
import { PC } from "./requirements/Pc.ts";

export class ComputerFab{
    static createComputer(cpu : number, hdd: number, ram: number, type: string) : Computer | null {
        if(type.toLowerCase() == "server"){
            return new Server(cpu, hdd, ram, type,"RAID 0", "RHEL9");
        }else if(type.toLowerCase() == "pc"){
            return new PC( cpu, ram, hdd, type, "Monitor");
        }
        return null;
    }
}