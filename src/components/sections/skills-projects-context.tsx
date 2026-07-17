"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SkillDomain } from "@/data/resume";
import {
  projectIdsBySkillId,
  skillIdsByProjectId,
} from "@/data/resume";

export type DomainFilter = "all" | SkillDomain;

interface SkillsProjectsState {
  domainFilter: DomainFilter;
  selectedSkillId: string | null;
  selectedProjectId: string | null;
  relatedProjectIds: Set<string>;
  relatedSkillIds: Set<string>;
  setDomainFilter: (domain: DomainFilter) => void;
  selectSkill: (id: string | null) => void;
  selectProject: (id: string | null) => void;
  clearSelection: () => void;
}

const SkillsProjectsContext = createContext<SkillsProjectsState | null>(null);

const EMPTY_SET = new Set<string>();

export function SkillsProjectsProvider({ children }: { children: ReactNode }) {
  const [domainFilter, setDomainFilterState] = useState<DomainFilter>("all");
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const relatedProjectIds = useMemo(() => {
    if (!selectedSkillId) return EMPTY_SET;
    return projectIdsBySkillId.get(selectedSkillId) ?? EMPTY_SET;
  }, [selectedSkillId]);

  const relatedSkillIds = useMemo(() => {
    if (!selectedProjectId) return EMPTY_SET;
    return skillIdsByProjectId.get(selectedProjectId) ?? EMPTY_SET;
  }, [selectedProjectId]);

  const setDomainFilter = useCallback((domain: DomainFilter) => {
    setDomainFilterState(domain);
  }, []);

  const selectSkill = useCallback((id: string | null) => {
    setSelectedSkillId((prev) => (prev === id ? null : id));
    setSelectedProjectId(null);
  }, []);

  const selectProject = useCallback((id: string | null) => {
    setSelectedProjectId((prev) => (prev === id ? null : id));
    setSelectedSkillId(null);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedSkillId(null);
    setSelectedProjectId(null);
  }, []);

  const value = useMemo(
    () => ({
      domainFilter,
      selectedSkillId,
      selectedProjectId,
      relatedProjectIds,
      relatedSkillIds,
      setDomainFilter,
      selectSkill,
      selectProject,
      clearSelection,
    }),
    [
      domainFilter,
      selectedSkillId,
      selectedProjectId,
      relatedProjectIds,
      relatedSkillIds,
      setDomainFilter,
      selectSkill,
      selectProject,
      clearSelection,
    ]
  );

  return (
    <SkillsProjectsContext.Provider value={value}>
      {children}
    </SkillsProjectsContext.Provider>
  );
}

export function useSkillsProjects() {
  const ctx = useContext(SkillsProjectsContext);
  if (!ctx) {
    throw new Error(
      "useSkillsProjects must be used within SkillsProjectsProvider"
    );
  }
  return ctx;
}
