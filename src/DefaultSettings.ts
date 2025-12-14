export interface TodoistSettings {
	settingsVersion: number;
	excludedDirectories: string[];
	// can't use a dictionary/object because it doesn't have first-class support
	// for indexing, which is needed for settings manipulation/persistence
	keywordToTodoistQuery: keywordTodoistQuery[];
	authToken: string;
	enableAutomaticReplacement: boolean;
	showSubtasks: boolean;
	sortBy: SortOption;
	sortOrder: SortOrder;
	groupBy: GroupOption;
	// never rely on adding a new default value. Any change should entail bumping the settingsVersion
	// and adding a settings migration
}

export interface keywordTodoistQuery {
	keyword: string;
	todoistQuery: string;
}

export type SortOption = 'priority' | 'due_date' | 'content' | 'created_date' | 'none';
export type SortOrder = 'asc' | 'desc';
export type GroupOption = 'priority' | 'project' | 'none';

export const DEFAULT_SETTINGS: TodoistSettings = {
	settingsVersion: 3,
	excludedDirectories: [],
	keywordToTodoistQuery: [{keyword: "@@TODOIST@@", todoistQuery: "today|overdue"}],
	authToken: "TODO - get your auth token",
	enableAutomaticReplacement: true,
	showSubtasks: true,
	sortBy: 'none',
	sortOrder: 'asc',
	groupBy: 'none'
}
