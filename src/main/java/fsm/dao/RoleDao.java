package fsm.dao;

import java.util.List;
import fsm.model.domain.Role;

public interface RoleDao {

	public Integer addRole(Role role);

	public void removeRole(int roleId);

	public void updateRole(Role role);

	public Role getRoleById(int roleId);

	public List<Role> getAllRoles();
	
}
